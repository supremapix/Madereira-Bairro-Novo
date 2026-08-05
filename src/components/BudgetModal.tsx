import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calculator, Trees, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { COMPANY_DATA } from '../data/company';

export function BudgetModal({
  isOpen,
  onClose,
  initialProductSlug
}: {
  isOpen: boolean;
  onClose: () => void;
  initialProductSlug?: string;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locationName, setLocationName] = useState('Curitiba');
  const [selectedProduct, setSelectedProduct] = useState(
    initialProductSlug || 'madeira-de-pinus'
  );
  const [quantity, setQuantity] = useState('10 peças');
  const [observations, setObservations] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productObj = PRODUCTS_DATA.find((p) => p.slug === selectedProduct);
    const productName = productObj ? productObj.name : 'Madeira de Pinus';

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - SITE OFICIAL*
----------------------------------------
*Cliente:* ${name || 'Não informado'}
*Telefone:* ${phone || 'Não informado'}
*Local de Entrega:* ${locationName}
*Produto:* ${productName}
*Quantidade Aprox.:* ${quantity}
*Observações:* ${observations || 'Sem observações adicionais'}
----------------------------------------
_Enviado através do site madeireirabairronovo.com.br_`;

    const whatsappUrl = `https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl p-6 sm:p-8 text-stone-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Calculator className="w-6 h-6 stroke-[2.25]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-100 leading-tight">
                    Solicitar Orçamento Rápido
                  </h3>
                  <p className="text-xs text-amber-500 font-semibold">
                    Atendimento imediato via WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-100 bg-stone-800 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(41) 99999-9999"
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                    Bairro ou Cidade
                  </label>
                  <input
                    type="text"
                    required
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="Ex: Sítio Cercado, Batel ou Pinhais"
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                  Selecione o Produto Desejado
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors"
                >
                  {PRODUCTS_DATA.map((prod) => (
                    <option key={prod.slug} value={prod.slug}>
                      {prod.name} ({prod.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                  Quantidade Estimada ou Medidas
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Ex: 50 tábuas de 30cm, ou 10 caibros de 4m"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-stone-400 mb-1">
                  Observações Adicionais (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  placeholder="Detalhes sobre entregas, horários ou especificações..."
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black py-4 rounded-xl text-base shadow-xl flex items-center justify-center gap-2 active:scale-98 transition-all min-h-[54px]"
                >
                  <Send className="w-5 h-5" />
                  ENVIAR ORÇAMENTO VIA WHATSAPP
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-400 pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Resposta técnica em minutos no horário comercial</span>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
