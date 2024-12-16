"use client"

import { FC } from "react"
import Link from "next/link"
import { Avatar, Card, IconButton } from "ui"
import {
    HiEllipsisVertical,
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlineBuildingOffice,
    HiOutlineUser,
    HiOutlineClock,
    HiChevronRight
} from "react-icons/hi2"
import { generateInitials } from "@sahil/lib/strings"
import { formatDateTime } from "@sahil/lib/dates"

interface BaseEntityCardProps {
    id: string
    name: string
    type?: string
    contactName?: string
    phoneNumber?: string
    address?: string
    categories?: Array<{ category_name: string }>
    status?: string
    createdAt?: string
    extraInfo?: {
        label: string
        value: string
    }[]
    route: string
    className?: string
    avatar?: string
}

export const EntityCard: FC<BaseEntityCardProps> = ({
    id,
    name,
    type,
    contactName,
    phoneNumber,
    address,
    categories,
    status,
    createdAt,
    extraInfo,
    route,
    className = "",
    avatar = "https://placehold.co/40x40"
}) => {
    const initials = generateInitials(name)

    return (
        <Card className={`w-full hover:shadow-lg transition-shadow ${className}`}>
            <div className="space-y-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link
                        href={`/${route}/${id}`}
                        className="flex items-center gap-3 group"
                    >
                        <div className="avatar placeholder">
                            <Avatar
                                size="sm"
                                alt={name}
                                initials={initials}
                                
                            />
                        </div>
                        <div>
                            <h3 className="font-medium group-hover:text-primary transition-colors">
                                {name} <HiChevronRight className="w-4 h-4 text-gray-500" />
                            </h3>
                            {type && (
                                <span className="text-sm text-gray-500 capitalize">
                                    {type}
                                </span>
                            )}
                            {/* Status Badge */}
                            {status &&  (
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`
              badge badge-sm py-2
              ${status === 'CONFIRMED' && 'badge-success text-white'} 
              ${status === 'PENDING' && 'badge-warning text-white'}
              ${status === 'CANCELED' && 'badge-error text-white'}
            `}>
                                        {status}
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>

                    <IconButton icon={HiEllipsisVertical} />
                </div>

                {/* Main Content */}
                <div className="space-y-3 pt-2">
                    {/* Contact Info */}
                    {contactName && (
                        <div className="flex items-center gap-3 text-sm">
                            <span className="shadow-sm p-2 rounded-full">
                                <HiOutlineUser className="w-4 h-4 text-gray-500" />
                            </span>

                            <span>{contactName}</span>
                        </div>
                    )}

                    {phoneNumber && (
                        <div className="flex items-center gap-3 text-sm">
                            <span className="shadow-sm p-2 rounded-full">
                                <HiOutlinePhone className="w-4 h-4 text-gray-500" />
                            </span>
                            <span>{phoneNumber}</span>
                        </div>
                    )}

                    {address && (
                        <div className="flex items-center gap-3 text-sm">
                            <span className="shadow-sm p-2 rounded-full">
                                <HiOutlineMapPin className="w-4 h-4 text-gray-500" />
                            </span>
                            <span className="truncate">{address}</span>
                        </div>
                    )}

                    <div className="divider"></div>

                    {/* Extra Info */}
                    {extraInfo && extraInfo.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {extraInfo.map(({ label, value }) => (
                                <div key={label} className="space-y-1">
                                    <span className="text-xs text-gray-500">{label}</span>
                                    <p className="font-medium">{value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

