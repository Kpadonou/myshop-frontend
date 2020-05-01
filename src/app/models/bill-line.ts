export class BillLine {
  id?: number;
  quantity: number;
  vatRate: number;
  excludingTaxesAmount: number;
  includingTaxesAmount: number;
  vatAmount: number;
  itemId: number;
  billId: number;
}
