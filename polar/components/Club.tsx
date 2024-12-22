import AnimatedSection from './AnimatedSection';

export default function Club() {
  return (
    <section
      id="club"
      className="py-20 
      bg-gradient-to-b from-blue-900 to-pink-300
    "
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-white">Nuestro Club</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 ">Historia</h3>
              <p className="text-gray-700 leading-relaxed">
                Fundado en 2020, Polar FC ha sido un símbolo de fuerza y
                determinación en el mundo del fútbol. Nuestro equipo, inspirado
                en la majestuosidad del oso polar, se ha convertido en un
                referente de juego limpio y espíritu deportivo. A lo largo de
                los años, hemos superado desafíos y alcanzado logros que nos han
                posicionado como uno de los equipos más respetados de la liga.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 ">Valores</h3>
              <ul className="space-y-4">
                {[
                  'Trabajo en equipo',
                  'Perseverancia',
                  'Respeto',
                  'Excelencia',
                ].map((value) => (
                  <li key={value} className="flex items-center text-gray-700">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
