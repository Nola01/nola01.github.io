import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects"> | CollectionEntry<"trayectoria">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  // 1. Detectamos el idioma dinámicamente según el ID del archivo (en/ o es/)
  const lang = entry.id.startsWith("en/") ? "en" : "es"; 
  
  const hasDetail = entry.data && "hasDetail" in entry.data ? entry.data.hasDetail : true;
  
  // 2. Ajustamos la ruta de la colección según el idioma detectado
  const collectionPath = entry.collection === "projects" 
    ? (lang === "es" ? "proyectos" : "projects") 
    : entry.collection;

  // 3. Limpiamos el slug eliminando el prefijo del idioma (ej: "en/tfg" pasa a ser "tfg")
  const pureSlug = entry.slug.replace(/^(en|es)\//, "");

  // 4. Construimos la URL final correcta: /en/projects/slug o /es/proyectos/slug
  const href = `/${lang}/${collectionPath}/${pureSlug}`;

  const baseClasses = "p-4 gap-3 flex items-center border rounded-lg border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out";
  const interactiveClasses = "group hover:bg-black/5 hover:dark:bg-white/10 cursor-pointer";
  const staticClasses = "cursor-default";

  const CardInner = (
    <>
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          <div class="text-sm uppercase">
            {entry.collection === "trayectoria" ? (
              <>
                {formatDate(entry.data.dateStart)} 
                {" — "} 
                {/* 5. Traducimos "Presente" dinámicamente */}
                {entry.data.dateEnd ? formatDate(entry.data.dateEnd) : (lang === "es" ? "Presente" : "Present")}
              </>
            ) : (
              // @ts-ignore
              formatDate(entry.data.date)
            )}
          </div>
        </div>

        <div class="font-semibold mt-3 text-black dark:text-white line-clamp-2">
          {entry.collection === "trayectoria" ? entry.data.role : entry.data.title}
        </div>

        {entry.collection === "trayectoria" && (
          <div class="text-sm opacity-75 font-medium">
            {entry.data.company}
          </div>
        )}

        <div class="text-sm line-clamp-2 mt-1">
          {entry.data.description}
        </div>

        {"tags" in entry.data && Array.isArray(entry.data.tags) && (
          <ul class="flex flex-wrap gap-2 mt-2">
            {entry.data.tags.map((tag: string) => (
              <li class="text-xs uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-black/75 dark:text-white/75">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (hasDetail === false) {
    return (
      <div class={`${baseClasses} ${staticClasses}`}>
        {CardInner}
      </div>
    );
  }

  return (
    <a href={href} class={`${baseClasses} ${interactiveClasses}`}>
      {CardInner}
      {/* Añadido un pequeño icono de flecha para mejorar la UI al hacer hover */}
      <div class="text-black/50 dark:text-white/50 group-hover:text-black group-hover:dark:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </a>
  );
}