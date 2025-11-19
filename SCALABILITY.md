# Scalability Approach

1. **Modular Architecture**  
   Each feature (auth, users, tasks) is isolated under its own module for horizontal scalability.

2. **Database Scalability**  
   MongoDB supports sharding and replica sets.

3. **Caching (Optional)**  
   Redis can be added for caching heavy reads and JWT blacklist.

4. **Stateless Authentication**  
   JWT allows distributed load-balanced deployment.

5. **Load Balancing**  
   Can run behind NGINX / AWS ALB.

6. **Docker Deployment**  
   App can be containerized and deployed on Kubernetes.

7. **Monitoring & Logging**  
   Add Winston/Pino + PM2 or Grafana/ELK.
