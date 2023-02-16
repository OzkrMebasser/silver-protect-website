import { Fragment } from "react";

const Testimonials = () => {
  return (
    <Fragment className="relative bg-white">
      <section
        className=" relative text-gray-600 body-font bg-white underlineComp"
        id="testimoniales"
      >
        <div className="container px-5 py-24 mx-auto bg-white">
          <h1 className="text-[#3f3f3f] text-3xl font-bold text-center py-4 uppercase">
            Testimoniales
          </h1>
          <h3 className=" text-[#3f3f3f] md:text-2xl sm:text-2xl text-2xl font-bold  text-center">
            ¿Que dicen nuestros clientes?
          </h3>

          <div className="flex flex-wrap -m-4 textos">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Somos una familia con 2 niños y Silver Protect es
                  indispensable en nuestro hogar. Lo usamos para raspones,
                  desinfectar manos, heridas poco más graves y para cuando
                  estamos por empezar con gripe para la garganta. Lo mejor es
                  que no arde y mis niños se sienten tranquilos y saben que los
                  va a curar.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2FSof%C3%ADa%20Moreno.jpg?alt=media&token=89036960-baaf-4289-950d-ee0a2865e37e"
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Sofia Moreno
                    </span>
                    <span className="text-gray-500 text-sm">
                      Maestra de Kinder
                    </span>
                  </span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Tenía un problema de hongo y por padecimientos no puedo
                  utilizar cualquier producto. Un amigo me recomendó Silver
                  Protect y la verdad comencé a notar mejora prácticamente tras
                  las primeras aplicaciones. Me ha resultado muy efectivo.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2FMario%20Mesa%20Padilla.jpg?alt=media&token=b5971e48-49e3-40d6-b6cf-fd5520dbbe33"
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mario Mesa Padilla
                    </span>
                    <span className="text-gray-500 text-sm">Ingeniero</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  ¡Me encanta! Lo utilizo para desinfectar mi garganta cuando
                  tengo dolor, es impresionante como casi al instante me alivia
                  y calma los síntomas.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2FBerenice%20Mercado%20Vega.jpg?alt=media&token=f6f17afb-de70-4659-9846-7ed22ca92b56"
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Berenice Mercado Vega
                    </span>
                    <span className="text-gray-500 text-sm">Contadora</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Mi suegro sufre de pie diabético, una conocida nos recomendó
                  Silver Protect para tratar las úlceras en sus pies, la verdad
                  nos sorprendió muchísimo lo efectivo que es para curar.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://firebasestorage.googleapis.com/v0/b/silver-protect.appspot.com/o/imgsSilver%2FRosa%20Mar%C3%ADa%20Castellanos.jpg?alt=media&token=a0031a6a-4ddc-41e5-a85b-6fe78f17cd2a"
                    className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                    Rosa María Castellanos
                    </span>
                    <span className="text-gray-500 text-sm">Abogada</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
