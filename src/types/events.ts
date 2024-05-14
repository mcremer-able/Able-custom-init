/**
 * The interface of the event we emit to azure
 * Convention is to call the event '[`APP`] `event_name`'
 * and have a few required properties
 * - id - the id of the relevant object i.e `userId`,`dmsId`, `processId`
 * - payload - Can be any json, but should never nest more than 1 level
 *
 * @example
 * ```ts
 * interface CustomEvents {
 * '[OUTGOING] invoice_sent': (
 *   id: string,
 *   payload: {
 *    pdfId: string;
 *    xmlId:string;
 *    extraPdfId: string?;
 *     }
 *   )
 *}
 * ```
 *
 */
export interface CustomEvents {
  inquiry_started: (
    inquiryId: string,
    payload: {
      dmsId: string;
    }
  ) => void;
  '[OUTGOING] inquiry_started': (
    inquiryId: string,
    payload: {
      dmsId: string;
    }
  ) => void;
  inquiry_stopped: (
    inquiryId: string,
    payload: { dmsId: string; type: 'leave' | 'cancel' }
  ) => void;
  message_sent: (
    inquiryId: string,
    payload: { userId: string; dmsId: string; writeDocumentNote: boolean }
  ) => void;
  member_join: (
    inquiryId: string,
    payload: { userId: string; type: 'join' | 'invite' }
  ) => void;
  member_leave: (
    inquiryId: string,
    payload: { userId: string; type: 'leave' | 'remove' }
  ) => void;
}
