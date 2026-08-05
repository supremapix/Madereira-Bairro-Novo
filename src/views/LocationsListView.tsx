import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { LOCATIONS_DATA, OFFICIAL_NEIGHBORHOODS, RMC_CITIES, POPULAR_COMMUNITIES } from '../data/locations';
import { MapPin, Search, Truck, Users } from 'lucide-react';

export function LocationsListView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = LOCATIONS_DATA.filter((l) =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <EnhancedSEO
        title="Regiões Atendidas em Curitiba e Região Metropolitana - PR"
        description="Confira a lista completa dos 75 bairros de Curitiba e 15 cidades da Região Metropolitana com entrega rápida de Madeira de Pinus, Vigas, Caibros e Madeirite."
        canonicalPath="/regioes-atendidas"
        keywords={['Bairros de Curitiba Madeireira', 'Entrega de Madeira Curitiba', 'Cidades RMC Madeireira']}
      />

      <div className="bg-white text-stone-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              Logística Local
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-stone-900">
              Regiões Atendidas pela Bairro Novo Madeiras
            </h1>
            <p className="text-sm text-stone-600">
              Entregamos com frota própria em todos os 75 bairros oficiais de Curitiba, comunidades populares e municípios vizinhos da RMC.
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite o nome do seu bairro ou cidade (ex: Batel, Sítio Cercado, São José)..."
              className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-2xl pl-12 pr-4 py-3 text-sm text-stone-900 focus:outline-none transition-colors shadow-sm"
            />
          </div>

          {searchTerm ? (
            /* Search Results Grid */
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-amber-800">
                Resultados para "{searchTerm}" ({filtered.length})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                {filtered.map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.type === 'bairro' ? 'bairro' : 'cidade'}/${item.slug}`}
                    className="p-3 rounded-xl bg-stone-50 hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* Standard Full Categorized Grids */
            <div className="space-y-8">
              {/* Curitiba Official Neighborhoods */}
              <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-amber-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  Todos os 75 Bairros Oficiais de Curitiba
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                  {OFFICIAL_NEIGHBORHOODS.map((b) => {
                    const slug = b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                    return (
                      <Link
                        key={b}
                        to={`/bairro/${slug}`}
                        className="p-2.5 rounded-xl bg-white hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1"
                      >
                        {b}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Popular Communities */}
              <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-amber-800 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Comunidades e Vilas Populares
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
                  {POPULAR_COMMUNITIES.map((c) => {
                    const slug = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                    return (
                      <Link
                        key={c}
                        to={`/bairro/${slug}`}
                        className="p-2.5 rounded-xl bg-white hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center line-clamp-1"
                      >
                        {c}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* RMC Cities */}
              <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-amber-800 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-600" />
                  Cidades da Região Metropolitana
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs">
                  {RMC_CITIES.map((city) => {
                    const slug = city.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                    return (
                      <Link
                        key={city}
                        to={`/cidade/${slug}`}
                        className="p-3 rounded-xl bg-white hover:bg-amber-100 text-stone-800 hover:text-amber-900 border border-stone-200 transition-colors text-center font-bold line-clamp-1"
                      >
                        {city}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
