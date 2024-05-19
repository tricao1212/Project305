using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project305.Models;

namespace Project305.Data
{
    public class Project305Context : DbContext
    {
        public Project305Context (DbContextOptions<Project305Context> options)
            : base(options)
        {
        }

        public DbSet<Project305.Models.User> User { get; set; } = default!;
        public DbSet<Project305.Models.RegisterForm> RegisterForm { get; set; }
        public DbSet<Project305.Models.PredefinedSensor> PredefinedSensor { get; set; }
    }
}
