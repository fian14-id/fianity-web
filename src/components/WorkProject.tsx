import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const WorkProject = ({params}: {params: string}) => {
  const t = useTranslations('workProject');

  return (
    <section className="w-full h-auto relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <h1 className="font-medium uppercase text-xs flex shrink items-start gap-2">
          <Sparkle className="w-4 h-4" /> {t('title')}
        </h1>
        <main className="col-span-3">
        <h2 className="uppercase mt-4 md:mt-0 font-bold text-xl md:text-3xl">{t('project-1.title')}</h2>
        <Image src="/images/thumb-project/barcode-design.png" alt={t('project-1.title')} width={500} height={300} className="w-full h-auto object-cover mt-2" />
        <ul className="grid grid-cols-2 md:grid-cols-4 text-center gap-4 mt-4 text-background font-semibold text-xs md:text-sm">
          <li className="bg-foreground inline-block rounded-full px-4 py-2">React.js</li>
          <li className="bg-foreground inline-block rounded-full px-4 py-2">Tailwindcss</li>
        </ul>
          <p className="mt-4 text-sm md:text-lg">
          {t('project-1.description')}
          </p>
          <Link href={`/${params}${t('project-1.learn-more')}`}>
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
          {t('button')} <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
          <br />
        <h2 className="uppercase mt-4 md:mt-0 font-bold text-xl md:text-3xl">{t('project-2.title')}</h2>
        <Image src="/images/thumb-project/nexanime.png" alt={t('project-2.title')} width={500} height={300} className="w-full h-auto object-cover mt-2" />
        <ul className="grid grid-cols-2 md:grid-cols-4 text-center gap-4 mt-4 text-background font-semibold text-xs md:text-sm">
          <li className="bg-foreground inline-block rounded-full px-4 py-2">Next.js</li>
          <li className="bg-foreground inline-block rounded-full px-4 py-2">Tailwindcss</li>
        </ul>
          <p className="mt-4 text-sm md:text-lg">
          {t('project-2.description')}
          </p>
          <Link href={`/${params}${t('project-2.learn-more')}`}>
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
          {t('button')} <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
        </main>
      </article>
    </section>
  );
};

export default WorkProject;
