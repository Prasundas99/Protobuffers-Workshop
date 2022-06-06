# Protobuffers Workshop

Protocol Buffers (Protobuf) is a method of serializing structured data useful for transmitting data over the wire or storing it. 

## What is Serialization and Deserialization?

Serialization is the process of converting an object (of any language) into bytes and storing them in persistent memory system. This memory system could be a file on the disk, messaging queue or a database. The major intention with serialization of object is that we can reuse the data and recreate the object on same or different machine. In deserialization, we convert the stored bytes back to an object.

## Why do we need Serialization and Deserialization?

While there are a few other use-cases, the most basic and important one is that it provides a way to transfer object data over a network to a different service/machine etc. and then to recreate object for its further use. Transferring object data via API, database or messaging queue requires the object to be converted into bytes so that it can be sent over a network. And this is where serialization becomes important.

In microservice architecture, the application is broken down into small services and these services communicate with each other via messaging queue and APIs. And all of this communication happens over a network which requires frequent conversion of object to bytes and back to objects. So, serialization and deserialization becomes very critical aspects when it comes to distributed environment.

## Why Google Protobuffers?

- Easy to use
- Uses less space than JSON 
- Supports multiple languages i.e language independent
- Supports multiple versions

## Demo Application

We have created an employee application in JSON folder. This application is used to demonstrate the serialization and deserialization of JSON data. 

In the conclusion we can find the JSON data is around 137kb for storing 3 objects. which is highly unoptimised when comes to sending huge data over http. So, Google Protobuffers is a great choice for serialization and deserialization.

Now comming to the next section, Protobuffers. It is language independent but here we will be using JavaScript to demonstrate the serialization and deserialization.

Protobuffer uses ProtoC which is a language for defining the data structures and is used to compile our protofile to our desired language to use.
