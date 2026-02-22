import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For, onMount } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import SearchBar from "@components/SearchBar"

type Props = {
  entry_name: string
  tags: string[]
  data: CollectionEntry<"blog">[] | CollectionEntry<'projects'>[]
  labels?: {
    search: string;
    showing: string;
    of: string;
    projects: string;
    oldest: string;
    newest: string;
  }
}

export default function SearchCollection({ entry_name, data, tags, labels }: Props) {
  const l = labels || {
    search: "Buscar proyectos",
    showing: "MOSTRANDO",
    of: "DE",
    projects: "PROYECTOS",
    oldest: "ANTIGÜEDAD",
    newest: "NOVEDAD"
  };

  // Estado para controlar el desplegable de filtros en móvil
  const [showFilters, setShowFilters] = createSignal(false);

  const coerced = data.map((entry) => entry as CollectionEntry<'blog'>);
  const [query, setQuery] = createSignal("");
  const [filter, setFilter] = createSignal(new Set<string>())
  const [collection, setCollection] = createSignal<CollectionEntry<'blog'>[]>([])
  const [descending, setDescending] = createSignal(false);

  const fuse = new Fuse(coerced, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    const filtered = (query().length < 2
      ? coerced
      : fuse.search(query()).map((result) => result.item)
    ).filter((entry) =>
      Array.from(filter()).every((value) =>
        entry.data.tags?.some((tag: string) => 
          tag.toLowerCase() === String(value).toLowerCase()
        ) ?? false
      )
    );
    setCollection(descending() ? filtered.toReversed() : filtered)
  })

  function toggleDescending() {
    setDescending(!descending())
  }

  function toggleTag(tag: string) {
    setFilter((prev) =>
      new Set(prev.has(tag)
        ? [...prev].filter((t) => t !== tag)
        : [...prev, tag]
      )
    )
  }

  function clearFilters() {
    setFilter(new Set<string>());
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  })

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24 mt-7">
          <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText={l.search} />
          
          {/* Botón para desplegar filtros en MÓVIL */}
          <button 
            onClick={() => setShowFilters(!showFilters())}
            class="flex sm:hidden items-center justify-between w-full px-3 py-2 mt-4 border rounded border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/5"
          >
            <span class="text-sm font-semibold uppercase text-black dark:text-white">
              {l.projects === "PROJECTS" ? "Filter by tags" : "Filtrar por etiquetas"}
              {filter().size > 0 && ` (${filter().size})`}
            </span>
            <svg 
              class={cn("size-5 transition-transform duration-300", showFilters() && "rotate-180")} 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/* Contenedor de etiquetas: Se oculta en móvil si no está activo, siempre visible en PC */}
          <div class={cn("mt-4 sm:block", showFilters() ? "block" : "hidden")}>
            <div class="relative flex flex-row justify-between w-full">
              <p class="text-sm font-semibold uppercase mb-4 text-black dark:text-white hidden sm:block">
                {l.projects === "PROJECTS" ? "Tags" : "Etiquetas"}
              </p>
              {filter().size > 0 && (
                <button onClick={clearFilters} class="absolute flex justify-center items-center h-full w-10 right-0 top-[-10px] sm:top-0 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300">
                  <svg class="size-5"><use href={`/ui.svg#x`} /></svg>
                </button>
              )}
            </div>

            <ul class="flex flex-wrap sm:flex-col gap-1.5">
              <For each={tags}>
                {(tag) => (
                  <li class="w-fit sm:w-full">
                    <button onClick={() => toggleTag(tag)} class={cn("w-full px-2 py-1 rounded flex gap-2 items-center bg-black/5 dark:bg-white/10 hover:bg-black/10 hover:dark:bg-white/15 transition-colors duration-300 ease-in-out", filter().has(tag) && "text-black dark:text-white")}>
                      <svg class={cn("shrink-0 size-5 fill-black/50 dark:fill-white/50 transition-colors duration-300 ease-in-out", filter().has(tag) && "fill-black dark:fill-white")}>
                        <use href={`/ui.svg#square`} class={cn(!filter().has(tag) ? "block" : "hidden")} />
                        <use href={`/ui.svg#square-check`} class={cn(filter().has(tag) ? "block" : "hidden")} />
                      </svg>
                      <span class="truncate block min-w-0 pt-[2px]">{tag}</span>
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class='flex justify-between flex-row mb-2 mt-4 sm:mt-0'>
            <div class="text-sm uppercase">
              {l.showing} {collection().length} {l.of} {data.length} {l.projects}
            </div>
            <button onClick={toggleDescending} class='flex flex-row gap-1 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-300'>
              <div class="text-sm uppercase">
                {descending() ? l.oldest : l.newest}
              </div>
              <svg class="size-5">
                <use href={`/ui.svg#sort-descending`} class={descending() ? "block" : "hidden"}></use>
                <use href={`/ui.svg#sort-ascending`} class={descending() ? "hidden" : "block"}></use>
              </svg>
            </button>
          </div>
          <ul class="flex flex-col gap-3">
            <For each={collection()}>
              {(entry) => (
                <li>
                  <ArrowCard entry={entry} />
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  )
}