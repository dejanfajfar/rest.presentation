_REST_ stands for __Re__presentational __S__tate __T__ransfer (sometimes spelled "ReST".). 

It relies on a 
 * stateless 
 * client-server 
 * cacheable 
 
communications protocol.

 > In virtually all cases _HTTP_ is used.

---

REST is an __architecture style__ for designing networked applications. The idea is that, rather than using complex 
mechanisms such as CORBA, RPC or SOAP to connect between machines, _simple HTTP_ is used to make calls between machines.

---

## resources and collections

---

![Resource model](./images/resource_vs_collection.png) <!-- .element: class="stretch" -->

---

### What is a resource?

---

 * An abstract set of information
 * The primitive in _Web architecture_
 * URL 
 * [URI](https://tools.ietf.org/html/rfc3986) (Universal Resource Identifier)
 * [IRI](https://tools.ietf.org/html/rfc3987) (International Resource Identifier)
 * ...

---

    ftp://ftp.is.co.za/rfc/rfc1808.txt
    
    http://www.ietf.org/rfc/rfc2396.txt
    
    ldap://[2001:db8::7]/c=GB?objectClass?one
    
    mailto:John.Doe@example.com
    
    news:comp.infosystems.www.servers.unix
    
    tel:+1-816-555-1212
    
    telnet://192.0.2.16:80/
    
    urn:oasis:names:specification:docbook:dtd:xml:4.1.2

---

 > _Collections_ are always __PRURAL__

---

## HTTP verbs

---

<table>
    <tr>
        <th>HTTP verb</th>
    </tr>
    <tr>
        <td>GET</td>
    </tr>
    <tr>
        <td>HEAD</td>
    </tr>
    <tr>
        <td>POST</td>
    </tr>
    <tr>
        <td>PUT</td>
    </tr>
    <tr>
        <td>DELETE</td>
    </tr>
    <tr>
        <td>TRACE</td>
    </tr>
    <tr>
        <td>CONNECT</td>
    </tr>
    <tr>
        <td>OPTIONS</td>
    </tr>
</table>

---

<table>
    <tr>
        <th>HTTP verb</th>
        <th>CRUD operation</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>Read</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>Create</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>Update</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>Remove</td>
    </tr>
</table>

---

 > __HTTP verb__ != __CRUD__

---

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Scope</th>
            <th>Semantics</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>collection</td>
            <td>Retrieve all resources in a collection</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>resource</td>
            <td>Retrieve a single resource</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>collection</td>
            <td>Create a new resource in a collection</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>resource</td>
            <td>Update a resource</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>resource</td>
            <td>Update a resource</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>resource</td>
            <td>Delete a resource</td>
        </tr>
    </tbody>
</table>

---

### post, put, patch

There is a lot of confusion regarding these three _HTTP verbs_. Generally the usage of there verbs is a follows:
 * __POST__ -> Create a new resource
 * __PUT__ -> Update an existing resource (send all values including the not changed)
 * __PATCH__ -> Update and existing resource (send only the changed values)

---

## http status codes

---

All REST responses include a _HTTP status code_ which reflects the outcome of the desired operation. 

 > standard [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used
 
---
 
 <table>
    <tr>
        <th>HTTP status code</th>
        <th>Possible usage</th>
    </tr>
    <tr>
        <td>404</td>
        <td>Resource or collection not found or invalid Id</td>
    </tr>
    <tr>
        <td>200</td>
        <td>Operation successful</td>
    </tr>
        <tr>
            <td>201</td>
            <td>Resource created</td>
        </tr>
    <tr>
        <td>...</td>
        <td>...</td>
    </tr>
 </table>
 
---

## hateoas

---
 
HATEOAS, an abbreviation for __H__ypermedia __a__s __t__he __E__ngine __o__f __A__pplication __S__tate, is a constraint of the _REST application 
architecture_ that distinguishes it from most other network application architectures. The principle is that a client 
_interacts_ with a network application _entirely_ through hypermedia __provided dynamically by application servers__. 
A REST client needs no prior knowledge about how to interact with any particular application or server beyond a 
generic understanding of hypermedia. By contrast, in some service-oriented architectures (SOA), clients and servers 
interact through a fixed interface shared through documentation or an interface description language (IDL).