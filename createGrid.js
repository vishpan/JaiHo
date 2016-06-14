"use strict";
var lod = require('lodash');
var Grid = function(lengthOrWidth){
    this.lengthOrWidth = lengthOrWidth;
    this.grid = {};
};
var assignedBoxes = {};
Grid.prototype = {
    createGrid:function(){
        for(var i = 0;i<this.lengthOrWidth;i++){
            this.grid[String.fromCharCode(i+65)] = [];
            for(var j = 0;j<this.lengthOrWidth;j++){
                this.grid[String.fromCharCode(i+65)].push(j);
            }
        }
    },
    assignBox:function(){
        lod.each(this.grid,function(ele,index){
            lod.each(ele,function(elem){
                assignedBoxes[index + elem] = ["T","R","B","L"];
            })
        })
    }
};


