import { ArrowUpRight, Sparkle } from "lucide-react";
import RippleButton from "./utils/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const WorkProject = ({params}: {params: string}) => {
  const t = useTranslations('workProject');

  return (
    <section className="w-full h-svh relative overflow-hidden py-20">
      <article className="w-full grid grid-cols-1 md:grid-cols-4">
        <h1 className="font-medium uppercase text-xs flex shrink items-start gap-2">
          <Sparkle className="w-4 h-4" /> {t('title')}
        </h1>
        <main className="col-span-3">
        <h2 className="uppercase mt-4 md:mt-0 font-medium text-sm">{t('project-1.title')}</h2>
          <p className="mt-2 uppercase font-light md:text-lg">
          {t('project-1.description')}
          </p>
          <Link href={`/${params}${t('project-1.learn-more')}`}>
          <RippleButton className="flex gap-2 items-center border-1 px-8 py-4 text-xs md:text-sm mt-5">
          {t('button')} <ArrowUpRight className="w-4 h-4" />
          </RippleButton>
          </Link>
          <br />
        <h2 className="uppercase mt-4 md:mt-0 font-medium text-sm">{t('project-2.title')}</h2>
          <p className="mt-2 uppercase font-light md:text-lg">
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
