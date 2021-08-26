import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      let result;
      const point = Point(3,4);
      let distance = radius^2 - ((center-point.x)^2 + (center-point.y)^2);

      if(distance>0)
         result  =true;
      else if(distance==0)
           result  =true;
      else
        result  =fasle;
        return result;
    }
  }
 
}
