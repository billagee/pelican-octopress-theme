/*! JS Bat 2025 - v1.3 - based on Eric Grange's work, see www.delphitools.info */
;(function () {
var r=Math.random,n=0,d=document,w=window,
	i=d.createElement('img'),
	is=i.style,
	a=w.innerWidth*r(),b=w.innerHeight*r();
is.position="fixed";
is.left=0;
is.top=0;
is.opacity=0;
is.border="none";
is.outline="none";
is.display="block";
is.clipPath="inset(0 0 2px 0)";
i.src='data:image/gif;base64,R0lGODlhMAAwAPAAAP///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQAAACwAAAAAMAAwAAACdoSPqcvtD6NcYdpbr4Z5exV0UvhRohOe5UE+6cq0carCgJzQuM3ut16zvRBAH+/XKQ6PvaQyCFs+mbnWlEq0FrGi15XZJSmxP8OTRj4DyWY1lKdmV8fyLL3eXOPn6D3f6BcoOEhYaHiImKi4yNjo+AgZKTl5WAAAIfkECQEAAAAsAAAAADAAMAAAAnyEj6nL7Q+jdCHWicN9G1vdeWICao05ciUVpkrZIqjLwCdI16s+5wfck+F8JOBiR/zZZABk0mAsDp/KIHRKvVqb2KxTu/Vdvt/nGFs2V5Bpta3tBcKp8m5WWL/z5PpbtH/0B/iyNGh4iJiouMjY6PgIGSk5SVlpeYmZqVkAACH5BAkBAAAALAAAAAAwADAAAAJhhI+py+0Po5y02ouz3rz7D4biSJbmiabq6gQs4B5BvM7GTKv4buby7vsAbT9gZ4h0JYmZpXO4YEKeVCk0QkVUlw+uYovE8ibgaVBSLm1Pa3W194rL5/S6/Y7P6/f8vp9SAAAh+QQJAQAAACwAAAAAMAAwAAACZYSPqcvtD6OctNqLs968+w+G4kiW5omm6ooEbeCusAHHclyzQM3rOz9jAXuqIRFlPJ6SQWRSaIQOpUBqtfjEZpfMJqmrHIFtpbGze2ZywWu0aUwWEbfiZvQdD4sXuWUj7gPos1EAACH5BAkBAAAALAAAAAAwADAAAAJrhI+py+0Po5y02ouz3rz7D4ZiGIxUaU4Bmjrr+rDg+7ojXTdyh+c7kPP0egjabGg0EIVImHLJa6KaUam1aqVynNNsUvPTQjO/J84cFA3RzlaJO2495TF63Y7P6/f8vv8PGCg4SFhoeIg4UQAAIfkECQEAAAAsAAAAADAAMAAAAnaEj6nL7Q+jXGHaW6+GeXsVdFL4UaITnuVBPunKtHGqwoCc0LjN7rdes70QQB/v1ykOj72kMghbPpm51pRKtBaxoteV2SUpsT/Dk0Y+A8lmNZSnZlfH8iy93lzj5+g93+gXKDhIWGh4iJiouMjY6PgIGSk5eVgAADs=';
d.body.appendChild(i);
function R(o,m){return Math.max(Math.min(o+(r()-.5)*400,m-50),50)}
function A(){
	var x=R(a,w.innerWidth),y=R(b,w.innerHeight),
		d=5*Math.sqrt((a-x)*(a-x)+(b-y)*(b-y));
	is.opacity=n;n=1;
	is.transition=is.webkitTransition=d/1e3+'s linear';
	is.transform=is.webkitTransform='translate('+x+'px,'+y+'px)'+(a>x?'':' scaleX(-1)');
//	is.transform=is.webkitTransform='translate('+x+'px,'+y+'px)'+(a>x?'':'');
	a=x;b=y;
	setTimeout(A,d);
};setTimeout(A,r()*3e3);
})();
