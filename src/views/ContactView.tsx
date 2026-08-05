import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Send } from 'lucide-react';

export function ContactView({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <>
      <EnhancedSEO
        title="Contato e Endereço | Madeireira Bairro Novo Curitiba"
        description="Fale com a Madeireira Bairro Novo em Curitiba. Endereço: Rua Coronel Joaquim Antônio de Azevedo, 1459, Sítio Cercado. Telefone Fixo e WhatsApp: (41) 3013-4692."
        canonicalPath="/contato"
        keywords={['Contato Madeireira Bairro Novo', 'Telefone Madeireira Curitiba', 'Endereço Sítio Cercado']}
      />

      <div className="bg-white text-stone-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Atendimento ao Cliente
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Fale com a Madeireira Bairro Novo
            </h1>
            <p className="text-sm text-stone-600">
              Estamos de portas abertas para receber você em nosso depósito ou responder seu orçamento online em minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-amber-800">Informações de Contato</h2>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-200">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-900">Endereço Físico</span>
                    <span className="block">{COMPANY_DATA.address.street}, {COMPANY_DATA.address.number}</span>
                    <span className="block text-stone-500">{COMPANY_DATA.address.neighborhood} - {COMPANY_DATA.address.city} / {COMPANY_DATA.address.state}</span>
                    <span className="block text-stone-500">CEP: {COMPANY_DATA.address.cep}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-200">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-900">WhatsApp Vendas</span>
                    <a
                      href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {COMPANY_DATA.phones.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-200">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-900">Telefone Fixo</span>
                    <a href={`tel:${COMPANY_DATA.phones.landlineRaw}`} className="text-stone-800 font-bold">
                      {COMPANY_DATA.phones.landline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-200">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-900">E-mail Comercial</span>
                    <a href={`mailto:${COMPANY_DATA.email}`} className="text-amber-800 hover:underline">
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-200">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-900">Horário de Funcionamento</span>
                    <span>{COMPANY_DATA.hours.weekdays}</span>
                    <span className="block text-stone-500">{COMPANY_DATA.hours.saturday}</span>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-stone-950 hover:bg-stone-900 text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md border border-amber-400/60 hover:border-amber-300 transition-colors min-h-[44px]"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Right Map Embed & Action Box */}
            <div className="lg:col-span-7 bg-stone-50 p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-amber-800">Localização em Curitiba</h2>

              <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-stone-200 bg-white relative shadow-inner">
                <iframe
                  title="Localização Madeireira Bairro Novo"
                  src={`https://maps.google.com/maps?q=${COMPANY_DATA.geo.latitude},${COMPANY_DATA.geo.longitude}&hl=pt&z=16&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 text-center space-y-3">
                <p className="text-xs text-stone-600">
                  Quer enviar sua lista de material diretamente para cotarmos agora mesmo?
                </p>
                <button
                  onClick={onOpenBudget}
                  className="bg-stone-950 hover:bg-stone-900 text-white font-bold px-7 py-3 rounded-2xl text-xs sm:text-sm shadow-md inline-flex items-center gap-2 border border-amber-400/60 hover:border-amber-300 min-h-[46px]"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Solicitar Orçamento</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
