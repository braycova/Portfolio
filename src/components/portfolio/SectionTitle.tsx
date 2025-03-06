export default function SectionTitle({title}: {title: string}) {
  return (
    <div className="flex items-center gap-3">
      <h1 className="font-bold text-xl lg:text-3xl">{title}</h1>
      <span className="border-b-2 dark:border-amber-50 flex-grow"></span>
    </div>
  )
}