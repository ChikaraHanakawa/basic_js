let obj = {
    prop : window.alert("true"),
    subObj : {
        val :  window.alert(100)
    },
    greetiing : function() {
        window.alert("Hello");
    }
};
console.log(obj.prop);
console.log(obj.subObj.val);
obj.greetiing();