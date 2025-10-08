'use client'

import React from 'react';
import { Phone, Mail, LucideIcon } from 'lucide-react';

interface ContactItem {
  icon: LucideIcon;
  text: string;
  href?: string;
  className?: string;
}

interface ContactTipsProps {
  // Contact Info
  contacts?: ContactItem[];
  
  // Tips
  tip?: string;
  tipIcon?: string;
  
  // Styling
  contactTextSize?: string;
  tipTextSize?: string;
  tipColor?: string;
  contactGap?: string;
  
  // Layout
  className?: string;
  showContacts?: boolean;
  showTip?: boolean;
}

const ContactTips: React.FC<ContactTipsProps> = ({
  contacts = [
    { 
      icon: Phone, 
      text: "0812-3456-7890", 
      href: "tel:+6281234567890" 
    },
    { 
      icon: Mail, 
      text: "info@embikfarm.com", 
      href: "mailto:info@embikfarm.com",
      className: "break-all sm:break-normal"
    }
  ],
  
  contactTextSize = "text-xs sm:text-sm",
  contactGap = "gap-4 sm:gap-6 lg:gap-8",
  
  className = "",
  showContacts = true,
}) => {
  const handleContactClick = (contact: ContactItem) => {
    if (contact.href) {
      window.open(contact.href, '_blank');
    }
  };

  return (
    <div className={className}>
      {/* Contact Info */}
      {showContacts && contacts && contacts.length > 0 && (
        <div className={`flex flex-col sm:flex-row items-center justify-center ${contactGap} ${contactTextSize} mb-4 sm:mb-5 lg:mb-6`}>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex items-center gap-1.5 sm:gap-2 ${
                contact.href ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
              }`}
              onClick={() => handleContactClick(contact)}
            >
              <contact.icon className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className={contact.className || ""}>
                {contact.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactTips;