import { Link } from 'react-router-dom';
import {
  Trees,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { PRODUCTS_DATA } from '../data/products';
import { RMC_CITIES, OFFICIAL_NEIGHBORHOODS } from '../data/locations';
import { SupremaCredit } from './SupremaCredit';

export function Footer({ onOpenBudget }: { onOpenBudget?: () => void }) {
  const topProducts = PRODUCTS_DATA.slice(0, 8);
  const sampleNeighborhoods = OFFICIAL_NEIGHBORHOODS.slice(0, 8);

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-900/30 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Top Company Identity & Fast CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 p-0.5 shadow-lg">
                <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center text-amber-500">
                  <Trees className="w-7 h-7 stroke-[2.25]" />
                </div>
              </div>
              <div>
                <span className="block text-2xl font-black text-stone-100 tracking-tight">
                  BAIRRO NOVO
                </span>
                <span className="block text-xs font-bold text-amber-500 tracking-widest uppercase">
                  Comércio de Madeiras Ltda.
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              Distribuidora especialista em <strong>Madeira de Pinus</strong>, Pinus Tratado Autoclavado, Tábuas, Caibros, Vigas e Madeirite. Atendendo Curitiba e toda a Região Metropolitana com qualidade, agilidade e sustentabilidade.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_DATA.phones.whatsappRaw}?text=${encodeURIComponent(
                  'Olá! Gostaria de cotar madeira de pinus com a Bairro Novo.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp: {COMPANY_DATA.phones.whatsapp}
              </a>

              <a
                href={`tel:${COMPANY_DATA.phones.landlineRaw}`}
                className="bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 border border-stone-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                {COMPANY_DATA.phones.landline}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-stone-900/60 rounded-2xl p-6 border border-stone-800/80">
            <div className="space-y-2">
              <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                Endereço e Localização
              </h4>
              <p className="text-xs text-stone-300 leading-normal">
                {COMPANY_DATA.address.street}, {COMPANY_DATA.address.number}
              </p>
              <p className="text-xs text-stone-400">
                {COMPANY_DATA.address.neighborhood} - {COMPANY_DATA.address.city} / {COMPANY_DATA.address.state}
              </p>
              <p className="text-xs text-stone-400">CEP: {COMPANY_DATA.address.cep}</p>
              <a
                href={COMPANY_DATA.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold pt-1"
              >
                <span>Ver rota no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                Horário de Atendimento
              </h4>
              <p className="text-xs text-stone-300">{COMPANY_DATA.hours.weekdays}</p>
              <p className="text-xs text-stone-300">{COMPANY_DATA.hours.saturday}</p>
              <p className="text-xs text-stone-400">{COMPANY_DATA.hours.sunday}</p>

              <div className="pt-2 text-xs text-stone-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CNPJ: {COMPANY_DATA.cnpj}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-stone-800">
          {/* Col 1: Main Products */}
          <div>
            <h4 className="text-sm font-black text-stone-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Produtos Principais
            </h4>
            <ul className="space-y-2 text-xs">
              {topProducts.map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/produto/${prod.slug}`}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/produtos"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span>Ver Todos os 19 Produtos →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Neighborhoods Curitiba */}
          <div>
            <h4 className="text-sm font-black text-stone-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Bairros de Curitiba
            </h4>
            <ul className="space-y-2 text-xs">
              {sampleNeighborhoods.map((b) => (
                <li key={b}>
                  <Link
                    to={`/bairro/${b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>Madeira em {b}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/regioes-atendidas"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span>Todos os 75 Bairros →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: RMC Cities */}
          <div>
            <h4 className="text-sm font-black text-stone-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Cidades da Região Metrop.
            </h4>
            <ul className="space-y-2 text-xs">
              {RMC_CITIES.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link
                    to={`/cidade/${city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>Madeireira em {city}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/regioes-atendidas"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span>Todas as Cidades RMC →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional & Blog */}
          <div>
            <h4 className="text-sm font-black text-stone-100 uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Institucional e Ajuda
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/produto/madeira-de-pinus" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Página Oficial - Madeira de Pinus
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Quem Somos & Sustentabilidade
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Blog e Guia Técnico de Madeiras
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Localização e Atendimento
                </Link>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBudget}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  Solicitar Cotador Rápido
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 text-[11px] text-stone-500 text-center leading-relaxed max-w-4xl mx-auto">
          <p>
            Bairro Novo Comércio de Madeiras Ltda. Todos os direitos reservados. Fotos ilustrativas e sujeitas a disponibilidade de estoque. Madeira de Pinus de reflorestamento com manejo autorizado pelo IBAMA / IAT Paraná.
          </p>
        </div>
      </div>

      {/* EXACT REQUIRED SUPREMA CREDIT COMPONENT AT THE VERY BOTTOM */}
      <SupremaCredit />
    </footer>
  );
}
