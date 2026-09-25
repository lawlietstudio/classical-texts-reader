const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { loadCatalog, loadBooks } = require('./archive-paragraphs.cjs');
const root = path.resolve(__dirname, '..');
const catalog = loadCatalog(root);
const provenance = require('../data/paragraphs/provenance.json');
const historical = loadBooks(root, provenance.revision);

test('all 20 Chinese books retain exact pre-split text, translations and chapter IDs', () => {
  assert.equal(catalog.books.length, 20);
  for (const book of catalog.books) {
    const paragraphs = catalog.getBook(book.id, 'paragraph');
    assert.deepEqual(JSON.parse(JSON.stringify(paragraphs)), JSON.parse(JSON.stringify(historical.find(b => b.id === book.id))));
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
