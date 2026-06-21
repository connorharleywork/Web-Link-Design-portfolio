import { brand, contact, navLinks } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold text-[#fff6dd]">{brand.name}</h2>
          <p className="mt-3 text-[#c9c0ad]">{brand.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.map(([label, id]) => (
            <a className="text-sm text-[#c9c0ad] hover:text-[#d8b56d]" href={`#${id}`} key={id}>{label}</a>
          ))}
        </div>
        <div className="text-[#c9c0ad]">
          <a className="block hover:text-[#fff6dd]" href={contact.emailLink}>{contact.email}</a>
          <a className="mt-1 block hover:text-[#fff6dd]" href={contact.whatsappLink}>{contact.whatsapp}</a>
          <p className="mt-4">Instagram · LinkedIn · Facebook</p>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-sm text-[#8f8778]">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
    </footer>
  );
}
