export type PaymentStatus = 'pending' | 'approved' | 'declined' | 'refunded';
export type PaymentMethodType = 'credit_card' | 'pix' | 'boleto';

export interface PaymentMethod {
  id: string;
  type: PaymentMethodType;
  label: string;
}

export interface Payment {
  id: string;
  orderId: string;
  method: PaymentMethodType;
  status: PaymentStatus;
  amount: number;
}
