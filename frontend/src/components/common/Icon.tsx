import React from "react";
import { Code,Folder,Globe,User } from "lucide-react";


export const CoderIcon = ({ className = '', size = 16 }: { className?: string, size?: number }) => (
  <Code className={className} size={size} />
);

export const FileSurferIcon = ({ className = '', size = 16 }: { className?: string, size?: number }) => (
  <Folder className={className} size={size} />
);

export const WebSurferIcon = ({ className = '', size = 16 }: { className?: string, size?: number }) => (
  <Globe className={className} size={size} />
);

export const UserIcon = ({ className = '', size = 16 }: { className?: string, size?: number }) => (
  <User className={className} size={size} />
);
