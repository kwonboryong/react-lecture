/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnn05ditay7mwyu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "js663pec",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 10,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnn05ditay7mwyu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "js663pec",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 50,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
