import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'librospipe',
})
export class LibrospipePipe implements PipeTransform {
  transform(value: any, args: any): any {
    const resultadoPost = [];
    for (const post of value) {
      if (post.title.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultadoPost.push(post);
      }
    }
    return resultadoPost;
  }
}
