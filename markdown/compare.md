# Compare some more

---

## pros

---

### REST

 * Follows the philosophy of the Open Web
 * Relatively easy to implement and maintain
 * Clearly separates client and server implementations
 * Communication isn't controlled by a single entity 
 * Information can be stored by the client to prevent multiple calls
 * Can return data in multiple formats
 
---

### SOAP

 * Follows a formal enterprise approach
 * Works on top of any communication protocol, even asynchronously
 * Information about objects is communicated to clients
 * Security and authorization are part of the protocol
 * Can be fully described using WSDL

---

## cons

---

### REST

 * Only works on top of the HTTP protocol
 * Hard to enforce authorization and security on top of it
 
---

### SOAP

 * Spends a lot of bandwidth communicating metadata
 * Hard to implement and is unpopular among Web and mobile developers
 * Uses only XML

---

## When to use

---

### REST

 * When clients and servers operate on a Web environment
 * When information about objects doesn’t need to be communicated to the client
 
---

### soap

 * When clients need to have access to objects available on servers
 * When you want to enforce a formal contract between client and server

---

## When not to use

---

### rest

 * When you need to enforce a strict contract between client and server
 * When performing transactions that involve multiple calls
 
---

### soap

 * When you want the majority of developers to easily use your API
 * When your bandwidth is very limited 