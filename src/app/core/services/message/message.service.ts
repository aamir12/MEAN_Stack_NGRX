import { Injectable } from '@angular/core';
import { ErrorMessage, MessageType } from '../../constant';
import { ResponseHelper } from '../../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  /**
   * @param type 
   * @returns 
   */
  getMessage(type: MessageType): string {
    switch (type) {
      case MessageType.LOGIN_FAIL:
        return ErrorMessage.LOGIN_FAILURE;
      case MessageType.USERREGISTER_FAIL:
        return ErrorMessage.USERREGISTER_FAIL;
      case MessageType.ADD_ANOTHER_OWNER_FAIL:
        return ErrorMessage.ADD_OWNER_ERROR;
      case MessageType.FAILURE_REMOVING_BONDFORM:
        return ErrorMessage.FAILURE_REMOVING_BONDFORM;
      case MessageType.FAILURE_REMOVING_COVERAGE:
        return ErrorMessage.FAILURE_REMOVING_COVERAGE;
    }
  }

  getMessageByStatusCode(response: ResponseHelper<any>): string {
    switch (response.statusCode) {
      case 500:
        return ErrorMessage.MESSAGE_500;
      case 502:
        return ErrorMessage.MESSAGE_502;
      case 503:
        return ErrorMessage.MESSAGE_503;
      case 504:
        return ErrorMessage.MESSAGE_504;
      case 400:
        return ErrorMessage.MESSAGE_400;
      case 404:
        return ErrorMessage.MESSAGE_404;
      case 408:
        return ErrorMessage.MESSAGE_408;
      default:
        return ErrorMessage.MESSAGE_500;
    }
  }
}
