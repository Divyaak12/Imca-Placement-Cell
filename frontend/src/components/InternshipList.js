import React from "react";
import InternshipCard from "./InternshipCard";

export default function InternshipList({ filters }) {
  const internships = [
    {
      company: "Google",
      role: "Software Development Intern",
      stipend: 25000,
      location: "Bangalore",
      category: "IT",
      deadline: "15 Feb 2025",
      duration: "6 months",
      applied: true,
    },
    {
      company: "Microsoft",
      role: "Product Marketing Intern",
      stipend: 18000,
      location: "Hyderabad",
      category: "Marketing",
      deadline: "20 Feb 2025",
      duration: "4 months",
      applied: false,
    },
    {
      company: "Zomato",
      role: "UI/UX Design Intern",
      stipend: 15000,
      location: "Remote",
      category: "Design",
      deadline: "18 Feb 2025",
      duration: "3 months",
      applied: true,
    },
  ];

  const filteredList = internships.filter((job) => {
    const matchSearch =
      !filters.search ||
      job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.role.toLowerCase().includes(filters.search.toLowerCase()) ||
      job.location.toLowerCase().includes(filters.search.toLowerCase());

    const matchCategory =
      filters.category === "All Categories" || job.category === filters.category;

    const matchLocation =
      filters.location === "All Locations" || job.location === filters.location;

    const matchRemote =
      !filters.remoteOnly || job.location.toLowerCase() === "remote";

    const matchStipend =
      filters.stipend === "All Ranges" ||
      (filters.stipend === "₹10,000 - ₹15,000" &&
        job.stipend >= 10000 &&
        job.stipend <= 15000) ||
      (filters.stipend === "₹15,000 - ₹20,000" &&
        job.stipend > 15000 &&
        job.stipend <= 20000) ||
      (filters.stipend === "₹20,000+" && job.stipend > 20000);

    return matchSearch && matchCategory && matchLocation && matchRemote && matchStipend;
  });

  return (
    <div className="internship-list">
      {filteredList.map((job, index) => (
        <InternshipCard key={index} {...job} />
      ))}
    </div>
  );
}