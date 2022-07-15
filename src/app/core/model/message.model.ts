
export enum DialogMessageType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING'
}

/**
 * This model use for Message Dialog
 */
export interface Message<D = any> {
    type: DialogMessageType,
    message: string,
    payload?: D
}
