import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empleadopipe',
})
export class EmpleadopipePipe implements PipeTransform {
  transform(value: any, args: any): any {
    const resultadoPost = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultadoPost.push(post);
      }
    }
    return resultadoPost;
  }
}
