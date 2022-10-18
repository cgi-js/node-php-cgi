# phpcgijs

#### Run php scripts like wordpress, drupal, etc with node and cgi counter parts

---

With Node PHP Embedded (PHPCGIJS), you can leverage the speed of node.js and run all of the widely available php scripts directly inside your express site. This was originally a fork of http://github.com/mkschreder/node-php and has been modified for making this take dynamic PHP pathing, so that it can run without a PHP distribution installed on a machine and can work with an embedded PHP binary distribution.

## Installation

```
npm install phpcgijs --save
```

## Includes CGIJS Library as a dependancy

# cgijs

API for cgijs: `require("phpcgijs").cgijs`

#### Usage as `require("phpcgijs").cgijs` inbuilt dependency library APIs

---

_`CGIJS` is a library to run any `CGI` mode / `Interpreted language script` files, or connect to any web application server proxies, or manage processes in the system._

`CGIJS` library:

- Supports running any `CGI` / `Interpreted Language scripts` in `any OS` that runs `node.js`.
- Supports both `CGI` executables as well as `proxy` to `localhost`/ `remote` /`embedded servers` using proxying of multiple protocols (`http`, `websockets`, `tcp`, `udp`, `socks`, `ssh`, `ftp`).
- Supports managing processes like `embedded` `server` executables, embedded `database` executables, or `any other` embedded/ non-embedded executables

You can view more about `cgijs` at [github.com/cgi-js](https://github.com/cgi-js/cgi-js) or install it directly at [npm cgijs](https://www.npmjs.com/package/cgijs)

# phpcgijs

API for cgi: `require("phpcgijs").cgi`

#### Usage as `require("phpcgijs").cgi` inbuilt dependency library APIs

---

To run php scripts with node js and express create the following script like below:

```javascript
var express = require("express");
var php = require("./main");
// var php = require("phpcgijs");
var path = require("path");

var app = express();
var p = path.join("test/php");

// options are PHP-CGI command line options and can be found in documentation
// It can also be found in readme-php-options.txt (check for update in docs)
// options ignore -h and --help

app.use(
  "/",
  php.cgi(p, { cgi_path: "/usr/bin/", options: { "-c": "/etc/php.ini" } })
);

// 
// Following is the STRUCTURE for providing the declaration of paths and options:
//
// app.use("/expresspath", php.cgi("/path/to/phpscript.php", { "cgi_path":"to/php/cgi/path/php-cgi", options: { "-c": "/etc/php.ini" } }))
// 
// app.use("/", php.cgi(
//             "/path/to/phpscript.php",
//             { "options": {"-c": "/to/php/ini/path/php.ini"} }
//         ));
// 
// Following works without a local PHP-CGI path and tries to
//          use PHP-CGI installed in system by default:
// 
// app.use("/", php.cgi("/path/to/phpscript"));
// 
// Following uses a path in second argument defining the local copy of
//          PHP-CGI that you want to use for the application
// 
// app.use("/", php.cgi(
//             "/path/to/phpscript.php",
//             {
//                 "cgi_path":"to/php/cgi/path/php-cgi",
//                 "options": {"-c": "/to/php/ini/path/php.ini"}
//             }
//         ));
// 

app.listen(9090, "127.0.0.1");
console.log("Server listening at 9090!");
```

## Explanation

The script will pipe all files that end in the .php extension through the php parser. All other files will be served as static content. Basic permalinks are supported but the support for them can probably be improved.

You can also use the inbuilt `cgijs` API using the following features using the `require("phpcgijs").cgijs` API.

## Dependencies

#### Inbuilt phpcgijs `.cgi` usage

---

- You need to have the interpreter installed in the system in order to use this extension.
- Alternatively, You can specify the full path of locally available php-cgi path.
- If custom path not specified in express, it tries to find the system installed php-cgi executable. If still unavailable, the server errors out.

#### Inbuilt phpcgijs `.cgijs` usage

---

##### Node CGI Embedded - run interpreted scripts that support cgi using nodejs - `.init` , `.file` API

- [x] CGI file execution - Run any scripts that support CGI based serving/execution

##### Node Web Proxy - run web proxies using `.proxy` API

- [x] Running Proxies - Run any host that serves a web app, using proxy (HTTP, UDP, TCP, Websockets, Socks) and supports websocket implementation in web proxies

##### Node Processes - Manage web servers, database processes, or other system processes or services using `.process` API

- [x] Manage Processes or Services - Allows running and closing process Executables

##### CGIJS Functionality Details

- [x] The script should support piping all files of below interpreted languages including Python (2.x, 3.x) - `py`, Perl (Version Independent) - `plc`, `pld`, `pl`, PHP (Version Independent) - `php`, Ruby (Version Independent) - `rb`, Node.js (Version Independent) - `js`, CGI files - `cgi`.
- [x] The script should support piping all proxies of above languages and Jsp (With Tomcat, or any webserver as proxy) , Aspx (With IIS, Apache, or any webserver as proxy), Jsp and Aspx (With Tomcat, Nginx, and Apache embedded)
- [x] Some sections are pending to be tested but should function normally

## License

Copyright © 2019 - till it works Ganesh B for DesktopCGI <desktopcgi@gmail.com>

The MIT License (MIT) - See [LICENSE](https://github.com/cgi-js/node-php-cgi/blob/master/LICENSE) for further details.
