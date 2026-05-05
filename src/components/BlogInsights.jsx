import React from 'react';
import { motion } from 'framer-motion';
import './BlogInsights.css';

const blogs = [
  {
    category: "Insights",
    date: "Apr 30, 2025",
    title: "5 Design Trends That Will Define 2024",
    desc: "Explore the top design trends for 2024 that will influence web, UI/UX, and branding projects, helping you stay ahead of the curve."
  },
  {
    category: "Tutorials",
    date: "Apr 27, 2025",
    title: "How to Streamline Your Design Workflow",
    desc: "Discover practical strategies to improve your design process, save time, and deliver quality work more efficiently."
  }
];

const BlogInsights = () => {
  return (
    <section className="blogs-section" id="blogs">
      <div className="blogs-container">
        <motion.div 
          className="blogs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Read My Blog</div>
          <h2 className="blogs-title">Design Insights & Ideas</h2>
          <p className="blogs-desc">
            From design trends to creative processes, these articles offer insights to help you elevate your craft, solve challenges, and spark new ideas for your projects.
          </p>
        </motion.div>

        <div className="blogs-grid">
          {blogs.map((blog, idx) => (
            <motion.div 
              className="blog-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="blog-meta">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <h3 className="blog-name">{blog.title}</h3>
              <p className="blog-detail">{blog.desc}</p>
              <button className="read-more-btn">Read Article &rarr;</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
