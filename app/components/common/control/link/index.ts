import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class CommonControlLinkComponent extends Component {
  @action handleClick() {
    console.log('click');
  }
}