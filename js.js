(function(){
	function IMchange(options)
	{
       this.op = this.extend({}, this.defaul, options);
       this.stop=null;
       var temp=0;
       var tagenode = this.op.tagenode.getElementsByTagName("ul")[0];
       this.play = function()
       {
           var that = this;
           this.stop=setInterval(function()
           {
               var len = (that.op.width)*(that.op.frame-1);
               temp--;
               if (temp<-len) 
               {
                    clearInterval(that.stop);
                    that.replay();
               };
               tagenode.style.left=temp+"px";
           },20)
       };
       this.replay =function()
       {
          var that = this;
          this.stop=setInterval(function()
           {
               temp++;
               if (temp>0) {
                 clearInterval(this.stop);
                 this.replay();
               };
               tagenode.style.left=temp+"px";
           },20)
       };
       this.init = function()
       {
       	  this.play();
       }
	}
	IMchange.prototype={
		constructor: IMchange,
		defaul: {
             tagenode: null,
             width: 400,
             height: 200,
             frame: 5,
		},
		extend: function()
		{
            var targetobj = arguments[0];
            var extobj = [].slice.call(arguments, 1);
            var tmp = null;
            if (Object.prototype.toString.call(extobj) === "[object Array]" && extobj && extobj.length) 
            {

       				for (var i=0; i<extobj.length; i++) {
       					 tmp = extobj[i];           
                 for(var o in tmp)
                 {
                   	if (tmp.hasOwnProperty(o)) 
                    {
                   		targetobj[o] = tmp[o]
                   	}
                 }
       				}
              return targetobj
            }
		 }
	}

	window.IMchange=IMchange;
    
})()