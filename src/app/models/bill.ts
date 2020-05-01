export class Bill {
    id?: number;
    date: string;
    reference: string;
    excludingTaxesAmount: number;
    includingTaxesAmount: number;
    vatAmount: number;
    isIssued: boolean;
    state: string;
    clientId: number;
    waiterId: number;
  }
