<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'customer_id' => $this->customer_id,
            'order_id' => $this->order_id,
            'transaction_status' => $this->transaction_status,
            'settlement_time' => $this->settlement_time?->format('j M Y, g:i A'),
            'transaction_time' => $this->transaction_time?->format('j M Y, g:i A'),
            'order_status' => strtolower($this->order_status->name),
            'step' => $this->order_status,
            'gross_amount' => number_format($this->gross_amount, 0, '.', '.'),
            'shipping_information' => $this->shipping_information,
            'payment_method' => $this->payment_method,
            'details' => TransactionDetailResource::collection($this->details),
        ];
    }
}
