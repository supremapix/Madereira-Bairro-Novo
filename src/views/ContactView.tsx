import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Send } from 'lucide-react';

export function ContactView({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <>
      <EnhancedSEO
        title="Contato e Endereço | Madeireira Bairro Novo Curitiba"
        description="Fale com a Madeireira Bairro Novo em Curitiba. Endereço: Rua Coronel Joaquim Antônio de Azevedo, 1459, Sítio Cercado. Telefones: (41) 3013-4692 / WhatsApp (41) 99121-7114."
        canonicalPath="/contato"
        keywords={['Contato Madeireira Bairro Novo', 'Telefone Madeireira Curitiba', 'Endereço Sítio Cercado']}
      />

      <div className="bg-stone-950 text-stone-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              Atendimento ao Cliente
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-100">
              Fale com a Madeireira Bairro Novo
            </h1>
            <p className="text-sm text-stone-300">
              Estamos de portas abertas para receber você em nosso depósito ou responder seu orçamento online em minutos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 bg-stone-900 p-8 rounded-3xl border border-stone-800 space-y-6">
              <h2 className="text-2xl font-black text-amber-400">Informações de Contato</h2>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-100">Endereço Físico</span>
                    <span className="block">{COMPANY_DATA.address.street}, {COMPANY_DATA.address.number}</span>
                    <span className="block text-stone-400">{COMPANY_DATA.address.neighborhood} - {COMPANY_DATA.address.city} / {COMPANY_DATA.address.state}</span>
                    <span className="block text-stone-400">CEP: {COMPANY_DATA.address.cep}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-100">WhatsApp Vendas</span>
                    <a
                      href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      {COMPANY_DATA.phones.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-100">Telefone Fixo</span>
                    <a href={`tel:${COMPANY_DATA.phones.landlineRaw}`} className="text-stone-200 font-bold">
                      {COMPANY_DATA.phones.landline}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-100">E-mail Comercial</span>
                    <a href={`mailto:${COMPANY_DATA.email}`} className="text-amber-400 hover:underline">
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-stone-100">Horário de Funcionamento</span>
                    <span>{COMPANY_DATA.hours.weekdays}</span>
                    <span className="block text-stone-400">{COMPANY_DATA.hours.saturday}</span>
                  </div>
                </div>
              </div>

              <a
                href={COMPANY_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transition-colors min-h-[44px]"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right Map Embed & Action Box */}
            <div className="lg:col-span-7 bg-stone-900 p-8 rounded-3xl border border-stone-800 space-y-6">
              <h2 className="text-2xl font-black text-amber-400">Localização em Curitiba</h2>

              <div className="w-full h-[360px] rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 relative">
                <iframe
                  title="Localização Madeireira Bairro Novo"
                  src={`https://maps.google.com/maps?q=${COMPANY_DATA.geo.latitude},${COMPANY_DATA.geo.longitude}&hl=pt&z=16&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 text-center space-y-3">
                <p className="text-xs text-stone-300">
                  Quer enviar sua lista de material diretamente para cotarmos agora mesmo?
                </p>
                <button
                  onClick={onOpenBudget}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-7 py-3 rounded-2xl text-xs sm:text-sm shadow-xl inline-flex items-center gap-2 min-h-[46px]"
                >
                  <Send className="w-4 h-4" />
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
