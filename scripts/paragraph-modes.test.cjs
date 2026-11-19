const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { loadCatalog, loadBooks } = require('./archive-paragraphs.cjs');
const root = path.resolve(__dirname, '..');
const catalog = loadCatalog(root);
const provenance = require('../data/paragraphs/provenance.json');
const historical = loadBooks(root, provenance.revision);

// Books authored after the sentence resegmentation ship both editions natively, so they have no
// pre-split Git revision to compare against; they are checked for internal consistency instead.
const nativeBookIds = ['shuihu', 'zhanguoce', 'zuozhuan', 'xunzi'];
// Books whose original chapters are archived but which have since been extended with natively authored chapters:
// the archived chapters must still match the pre-split revision exactly; added chapters are checked for consistency.
const extendedBookIds = ['shiji'];

test('all 20 archived Chinese books retain exact pre-split text, translations and chapter IDs', () => {
  assert.equal(catalog.books.length, 20 + nativeBookIds.length);
  for (const book of catalog.books) {
    const paragraphs = catalog.getBook(book.id, 'paragraph');
    if (nativeBookIds.includes(book.id)) continue;
    const archived = historical.find(b => b.id === book.id);
    if (extendedBookIds.includes(book.id)) {
      const ids = new Set(archived.chapters.map(c => c.id));
      const byId = (list) => JSON.parse(JSON.stringify([...list].sort((a, b) => a.id.localeCompare(b.id))));
      assert.deepEqual(byId(paragraphs.chapters.filter(c => ids.has(c.id))), byId(archived.chapters));
      for (const chapter of book.chapters.filter(c => !ids.has(c.id))) {
        const para = paragraphs.chapters.find(c => c.id === chapter.id);
        assert.ok(para, `${book.id} ${chapter.id} missing paragraph edition`);
        const flat = (passages, key) => passages.map(p => p[key]).join('').split(String.fromCharCode(10)).join('');
        for (const key of ['original', 'vernacular', 'vernacularMandarin']) {
          assert.equal(flat(chapter.passages, key), flat(para.passages, key), `${book.id} ${chapter.id} ${key}`);
        }
      }
    } else {
      assert.deepEqual(JSON.parse(JSON.stringify(paragraphs)), JSON.parse(JSON.stringify(archived)));
    }
    assert.deepEqual(Array.from(paragraphs.chapters, c => c.id), Array.from(book.chapters, c => c.id));
    assert.equal(catalog.getBook(book.id), book);
    assert.equal(catalog.getBook(book.id, 'sentence'), book);
    for (const mode of ['paragraph', 'sentence']) {
      for (const chapter of catalog.getBook(book.id, mode).chapters) {
        assert.ok(chapter.passages.length);
        assert.equal(new Set(chapter.passages.map(p => p.id)).size, chapter.passages.length);
        for (const passage of chapter.passages) {
          assert.ok(passage.original.trim());
          assert.ok(passage.vernacular.trim());
        }
      }
    }
  }
});

test('natively authored books keep both editions consistent', () => {
  for (const id of nativeBookIds) {
    const sentence = catalog.getBook(id, 'sentence');
    const paragraph = catalog.getBook(id, 'paragraph');
    assert.deepEqual(Array.from(paragraph.chapters, c => c.id), Array.from(sentence.chapters, c => c.id));
    sentence.chapters.forEach((chapter, i) => {
      const flat = (passages, key) => passages.map(p => p[key]).join('').split('\n').join('');
      for (const key of ['original', 'vernacular', 'vernacularMandarin']) {
        assert.equal(flat(chapter.passages, key), flat(paragraph.chapters[i].passages, key), `${id} ${chapter.id} ${key}`);
      }
      assert.ok(chapter.passages.length >= paragraph.chapters[i].passages.length);
      for (const passage of chapter.passages) {
        assert.ok(passage.original.trim() && passage.vernacular.trim() && passage.vernacularMandarin.trim());
      }
      assert.equal(new Set(chapter.passages.map(p => p.id)).size, chapter.passages.length);
    });
  }
});

test('Romance of the Three Kingdoms switches all 120 chapters without merging guessed boundaries', () => {
  const before = catalog.getBook('sanguoyanyi', 'paragraph');
  const after = catalog.getBook('sanguoyanyi', 'sentence');
  assert.equal(before.chapters.length, 120);
  assert.equal(before.chapters.reduce((n,c) => n+c.passages.length, 0), 2772);
  assert.equal(after.chapters.reduce((n,c) => n+c.passages.length, 0), 30133);
  assert.equal(before.chapters[0].passages[0].id, 'h001-1');
  assert.equal(after.chapters[0].passages[0].id, 'h001-1-1');
  assert.ok(before.chapters[0].passages[0].original.includes('\n'));
  assert.equal(catalog.getBook('missing', 'paragraph'), undefined);
});
