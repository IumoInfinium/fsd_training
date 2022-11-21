# MongoDB

MongoDb shell and Compass installation

### $\star$ Show all databases
```
show dbs
``` 

###  $\star$ Use a database

```
use <db-name>
```

### $\star$ Show collections

```
show collections
```

### $\star$ Create a collection

```
db.createCollection("<collection-name>")
```

### $\star$ Insert into document/record in collection
```
db.sona.insert({"name":"abdul","city":"udr"})
```

### $\star$ Insert Many records into documents/records in collection

```
db.sona.insertMany([{"name":"abdul","city":"udr"},{"name":"abdul hajmen","city":"udr"}])
```

### $\star$ Insert only One record into document/record

```
db.sona.insertOne({"name":"abdul","city":"udr"})
```

### $\star$ Find all the document

```
db.sona.find()
```

### $\star$ Find all documents and give a certain limit

```
db.sona.find().limit(3)
```

### Find only one document
```
db.sona.findOne()
```

### Find count of given documents

```
db.sona.find().count();
```

### $\star$ Show number of documents/records

```
db.sona.countDocuments();
```

### $\star$ Filter data with a value

```
db.sona.find({"address":"udr"})
```

### $\star$ Filter data with more than one option

```
db.sona.find({"city":"udaipur","name":"abira"})
```

### $\star$ Filter data with mathematical expression

+ Greater than a number

```
db.sona.find({"marks":{$gt:0}})
```

### $\star$ Update query

You can use `update` or `updateOne` or use  `updateMany` with an array of objects. 

```
db.sona.update({"name":"abira"},{$set:{"lastname":"choudhary"}});
```

Now,check with

```
db.sona.find({"name":"abira"})
```

### $\star$ UPDATE, if record not there, create it

```
db.sona.update(
    {
        "name":"harshit"
    },
    {
        $set:{
            "lastname" : "paneri"
            }
    },
    {
        upsert:true
    }
)

```

> `upsert` is set to _true_ to make sure, if no record is found, create a new record. 

### $\star$ Remove a document/record

```
db.sona.remove({"name":"abira"});
```


### $\star$ Aggregates

- `$project` - Show only the fields with value set to true(show).
- `$group` - Group by the records.
- `$match` - Find all the records that have given conditions.
- `$sort` - Sort the records with given condition.
- `$sum` 

    -  Either 1(true) or 0(false) to show.

- etc...

It is a key-value pair like
 aggregate( _key-name_: _values_ )


#### Aggregate Match

```
db.sona.aggregate({$match:{"city":"udaipur"}})
```

#### Aggregate Match and then project it
```
db.sona.aggregate([{$match:{"city":"udaipur"}},{$project : {"name":1,"city":1}}])
```

#### Aggregates with Match and then project, with hidden id

```
db.sona.aggregate([{
        $match:{"city":"udaipur"}},
        {
            $project : {"name":1,"city":1,"_id" : 0}
        }
    ])
```

---
Date - 17 Nov, 2022
---

#### Anding in operations -> $gt & $lt

```
db.sona.aggregate({
    $match:{
        $and:[{
                "marks":{$gt:60}
            },
            {
                "marks":{$lt:70}
            }
            ]}
        }
    )
```


#### Group by some constraint

```
db.sona.aggregate([
    {
        $group : {
            "_id":{
                "city":"$city"
            }
        }
    }
 ])
```

Muliple group-by in query

```
db.sona.aggregate([
    {
        $group:{
            "_id" : {
                "city" :"$city"
                },
            "count": {
                $sum :1
                }
    }}
])
```

Piping match with **group-by** & **sum** of records.

```
db.sona.aggregate([
    {
        $match :{
            "city" : "udaipur"
        }
    },
    {
        $group:{
            "_id" : {
                "city" :"$city"
                },
            "count": {
                $sum :1
                }
    }}
])
```

#### Sort data

For ascending order use `1`
for descending order of data use `0`


```
$sort :{"marks":1 ,"name":-1}
```
Here, records are sorted with marks in ascending and name in descending order.


Example - 
```
db.sona.aggregate([
    {
        $group: {
            "_id": {
                 "city": "$city"
                },
            "count":{
                $sum: 1
                }
            } 
    },
    {
        $sort : {
            "count":-1,
            "city":1
            }
        }
    ])
```

When there is a need to sort with object's key

```
db.sona.aggregate([
    {
        $group:{
            "_id":{
                "city": "$city"
                },
            "count":{
                 $sum: 1
                }
            }
    },
    {
        $sort:{
            "_id.city":1
            
        }
    }
    ])
```

> Q. Find the average marks per department

```
db.users.aggregate([
    {$match :{marks:{$gt:70}}},
    {$group :{"_id":{"dep":"$dept"}}},
    {"AvgMarks":{$avg: "$marks"}}
])
```