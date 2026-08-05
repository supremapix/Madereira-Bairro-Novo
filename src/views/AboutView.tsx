import { EnhancedSEO } from '../components/EnhancedSEO';
import { COMPANY_DATA } from '../data/company';
import { ShieldCheck, Trees, Award, Truck, MapPin, CheckCircle2 } from 'lucide-react';

export function AboutView({ onOpenBudget }: { onOpenBudget?: () => void }) {
  return (
    <>
      <EnhancedSEO
        title="Quem Somos | Bairro Novo Comércio de Madeiras Ltda."
        description="Conheça a história e estrutura da Madeireira Bairro Novo em Curitiba - PR. Especialistas em Madeira de Pinus sustentável, autoclave CCA e fornecimento para obras e marcenarias."
        canonicalPath="/sobre"
        keywords={['Quem Somos Bairro Novo', 'Madeireira Curitiba CNPJ', 'Sítio Cercado Madeiras']}
      />

      <div className="bg-stone-950 text-stone-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              Tradição e Qualidade
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-100">
              Sobre a Bairro Novo Comércio de Madeiras
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto">
              Sua parceira de confiança em fornecimento de <strong>Madeira de Pinus</strong> e produtos para construção civil em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="bg-stone-900 rounded-3xl p-8 sm:p-12 border border-stone-800 space-y-6">
            <h2 className="text-2xl font-black text-amber-400">Nossa História e Compromisso</h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Localizada no Sítio Cercado (Bairro Novo) em Curitiba, a <strong>Bairro Novo Comércio de Madeiras Ltda. (CNPJ: 44.205.587/0001-40)</strong> se consolidou como referência no mercado paranaense na distribuição de Madeira de Pinus, Pinus Tratado em Autoclave, Caibros, Vigas, Tábuas, Madeirite e Decks.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed">
              Com foco em sustentabilidade, trabalhamos exclusivamente com madeira proveniente de florestas renováveis de reflorestamento. Nossa estrutura conta com frota própria para garantir entregas pontuais diretamente nos canteiros de obras de Curitiba e RMC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Trees className="w-6 h-6 stroke-[2.25]" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">Sustentabilidade Garantida</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Toda a nossa linha de Pinus é 100% reflorestada com autorização ambiental dos órgãos competentes (IAT/IBAMA), preservando florestas nativas e neutralizando a pegada de carbono.
              </p>
            </div>

            <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 stroke-[2.25]" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">Processo Autoclavado CCA</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Utilizamos tecnologia industrial de autoclave em vácuo-pressão com imunizante CCA, garantindo madeira imune a cupins e apodrecimento por mais de 15 anos.
              </p>
            </div>
          </div>

          {/* Official Registry Card */}
          <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800 space-y-4 text-xs text-stone-300">
            <h3 className="text-base font-bold text-amber-400 uppercase tracking-wider">
              Dados Cadastrais da Empresa
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="block text-stone-400 font-semibold">Razão Social</span>
                <span className="block font-bold text-stone-100">{COMPANY_DATA.legalName}</span>
              </div>
              <div>
                <span className="block text-stone-400 font-semibold">CNPJ</span>
                <span className="block font-bold text-stone-100">{COMPANY_DATA.cnpj}</span>
              </div>
              <div>
                <span className="block text-stone-400 font-semibold">Endereço Principal</span>
                <span className="block font-bold text-stone-100">{COMPANY_DATA.address.formatted}</span>
              </div>
              <div>
                <span className="block text-stone-400 font-semibold">Contato Direto</span>
                <span className="block font-bold text-stone-100">{COMPANY_DATA.phones.landline} / {COMPANY_DATA.phones.whatsapp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
