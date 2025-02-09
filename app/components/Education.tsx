interface EducationItem {
  school: string;
  logo: string;
  degree: string;
  period: string;
}

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={`${item.school}-${item.period}`} className="flex items-center gap-4">
            <img
              src={item.logo}
              alt={`${item.school} logo`}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">{item.school}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
