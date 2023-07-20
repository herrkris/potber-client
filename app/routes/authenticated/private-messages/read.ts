import Route from '@ember/routing/route';
import { service } from '@ember/service';
import PrivateMessage from 'potber-client/models/private-message';
import CustomStore from 'potber-client/services/custom-store';

interface Params {
  id: string;
}

export interface PrivateMessagesReadRouteModel {
  message: PrivateMessage;
}

export default class PrivateMessagesReadRoute extends Route {
  @service declare store: CustomStore;

  async model(params: Params) {
    const message = await this.store.getPrivateMessage(params.id);
    return { message };
  }
}
