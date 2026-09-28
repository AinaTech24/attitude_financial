import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_DETAILS } from '@/data/serviceDetails';
import ServiceDetailView from '@/components/services/ServiceDetailView';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({
    slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const normalizedSlug = params.slug === 'tax-saving' ? 'tax-saving-investments' : params.slug === 'nps' ? 'nps-pension' : params.slug;
  const service = SERVICE_DETAILS[normalizedSlug];

  if (!service) {
    return {
      title: 'Service Not Found'
    };
  }

  return {
    title: `${service.title} | Attitude Financial Services`,
    description: service.description
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const normalizedSlug = params.slug === 'tax-saving' ? 'tax-saving-investments' : params.slug === 'nps' ? 'nps-pension' : params.slug;
  const service = SERVICE_DETAILS[normalizedSlug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
