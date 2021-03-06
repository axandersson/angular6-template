import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test1',
  template: `
    <span *HeaderContent>
      Test 2
    </span>

    <h1>Some text</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget ex velit. Donec non quam ac enim fermentum congue sit
      amet sit amet arcu. Nullam ut massa massa. Maecenas nibh elit, ullamcorper vitae magna sit amet, ornare bibendum metus.
      Praesent nec leo viverra, sollicitudin erat eu, porttitor augue. Vivamus risus mi, cursus sed pulvinar non, tincidunt
      et erat. Curabitur sit amet iaculis urna. Duis quis ultricies felis. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Praesent sit amet lacinia mauris, id congue ligula. Suspendisse potenti.
      Duis dapibus enim enim, vel sagittis lacus blandit sit amet. Sed porta eros risus, vel hendrerit nulla viverra a. Integer
      id lorem pulvinar, dignissim mi id, dignissim nisi. Sed at tempor neque, in auctor felis. Maecenas ac odio tellus. Donec
      posuere iaculis arcu ac consequat.
    </p>
    <p>
      In euismod, augue vel blandit iaculis, tellus mauris aliquet nisi, eget ultricies nibh magna vitae mi. Donec vulputate dolor
      et turpis bibendum, sed tempus odio tincidunt. Quisque feugiat risus quis lacinia semper. Vestibulum ut dolor vulputate,
      congue purus at, finibus nisi. Nam porttitor feugiat lorem eget dictum. Nullam rutrum dui eget luctus eleifend. Sed vel
      ornare ante. Nunc sagittis lacus ac risus volutpat semper. In commodo metus nulla, ut volutpat elit sollicitudin vitae.
      Aliquam erat volutpat. Nam eu tempor ante. Etiam eu augue nec felis aliquam gravida. Etiam et ligula venenatis, blandit
      velit gravida, molestie ex. Donec cursus ornare risus quis blandit. Aliquam a dictum mi, eu mollis enim.
    </p>
    <p>
      Pellentesque sit amet quam sit amet ex blandit auctor sed id leo. Cras tempor sodales tortor quis maximus. Fusce accumsan
      sollicitudin nibh a tempor. In maximus pellentesque efficitur. Duis efficitur congue elit eget mollis. Curabitur a pharetra
      lectus. Nulla metus ligula, pretium in enim eget, pretium posuere lorem. Mauris sit amet consequat lacus. Suspendisse
      ut orci eget velit imperdiet interdum. Maecenas eleifend bibendum odio, in sagittis nibh fermentum ut. Proin sem dolor,
      lacinia eu sagittis id, vestibulum in tortor. Donec eleifend dolor nulla, non interdum quam cursus eget. Aliquam metus
      ipsum, commodo eget iaculis non, maximus sit amet nulla. Integer et nibh nunc. Aenean volutpat diam in erat aliquam,
      nec commodo urna pretium. Praesent bibendum pretium mi eget aliquam. Pellentesque aliquam libero vitae eros eleifend
      tincidunt. Fusce ac vehicula ipsum. Curabitur mattis libero at neque cursus vehicula. Suspendisse maximus, metus sed
      sagittis tincidunt, urna sapien efficitur leo, sagittis viverra enim eros venenatis ante. Morbi ipsum felis, molestie
      ac aliquam id, pretium et eros.
    </p>
`
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
