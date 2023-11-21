"use strict";

function parseUrl(url){   
    this.href = url;
    this.protocol = url.split("://")[0];

    if(url.split("#").length != 1){
        this.hash = "#" + url.split("#")[1]; 
    }
    else{
        this.hash = "undefined";
    }

    this.host = url.split("://")[1];

    if(this.host.split("/").length != 1){
        this.host = this.host.split("/")[0];
    }
    if(this.host.split("?").length != 1){
        this.host = this.host.split("?")[0];
    }
    if(this.host.split("#").length != 1){
        this.host = this.host.split("#")[0];
    }

    if(this.host.split("@").length != 1){
        this.username = this.host.split("@")[0];
        this.host = this.host.split("@")[1];

        if(this.username.split(":").length != 1){
            this.pass = this.username.split(":")[1];
            this.username = this.username.split(":")[0];
        }
        else{
            this.pass = "undefined";
        }
    }
    else{
        this.username = "undefined";
        this.pass = "undefined";
    }

    if(this.host.split(":") != 1){
        this.port = this.host.split(":")[1];
        this.hostname = this.host.split(":")[0];
    }
    else{
        this.port = "";
    }

    this.pathname = url.split(this.host)[1];

    if(this.pathname[0] !== "/"){
        this.pathname = "/";
    }
    if(this.pathname.split("?") != 1){
        this.pathname = this.pathname.split("?")[0];
    }
    if(this.pathname.split("#") != 1){
        this.pathname = this.pathname.split("#")[0];
    }

    if(url.split("?").length != 1){
        this.query = url.split("?")[1];

        if(this.hash !== "undefined"){
            this.query = this.query.split("#")[0];
        }
    }
    else{
        this.query = "undefined";
    }

    this.origin = this.protocol + "://" + this.host;
}
let a = new parseUrl("http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");

printUrlInf(a);

a = new parseUrl("http://greg:ts@sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo");

printUrlInf(a);

a = new parseUrl("http://greg:ts@sys.it-co.ru:8080/do/any.php#foo");

printUrlInf(a);

a = new parseUrl("http://greg:ts@sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b");

printUrlInf(a);

a = new parseUrl("http://sys.it-co.ru:8080?a=1&b[]=a&b[]=b#foo");

printUrlInf(a);

a = new parseUrl("http://sys.it-co.ru:8080#foo");

printUrlInf(a);

a = new parseUrl("http://sys.it-co.ru:8080?a=1&b[]=a&b[]=b");

printUrlInf(a);

a = new parseUrl("http://sys.it-co.ru:8080");

printUrlInf(a);

a = new parseUrl("http://sys.it-co.ru");

printUrlInf(a);

a = new parseUrl("https://www.google.com");

printUrlInf(a);

function printUrlInf(a){
    console.log("href: " + a.href);
    console.log("protocol: " + a.protocol);
    console.log("username: " + a.username);
    console.log("pass: " + a.pass);
    console.log("host: " + a.host);
    console.log("hostname: " + a.hostname);
    console.log("port: " + a.port);
    console.log("pathname: " + a.pathname);
    console.log("query: " + a.query);
    console.log("hash: " + a.hash);
    console.log("origin: " + a.origin);
    console.log("");     
}
