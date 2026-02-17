import { formatDate, truncateText } from "@lib/utils"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects"> | CollectionEntry<"trayectoria">
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  const lang = "es"; 
  
  const hasDetail = entry.data && "hasDetail" in entry.data ? entry.data.hasDetail : true;
  
  const collectionPath = entry.collection === "projects" ? "proyectos" : entry.collection;
  const href = `/${lang}/${collectionPath}/${entry.slug}`;

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
                {entry.data.dateEnd ? formatDate(entry.data.dateEnd) : "Presente"}
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
      </div>

      {hasDetail && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white">
          <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
          <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        </svg>
      )}
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
    </a>
  );
}