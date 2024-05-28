using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Project305.Domain.Data
{
    public class Project305Context : DbContext
    {
        public Project305Context(DbContextOptions<Project305Context> options)
            : base(options)
        {
        }

        public DbSet<Project305.Domain.Models.Account> Account { get; set; } = default!;
        public DbSet<Project305.Domain.Models.Patient> Patient { get; set; } = default!;
        public DbSet<Project305.Domain.Models.Doctor> Doctor { get; set; } = default!;
        public DbSet<Project305.Domain.Models.Predefined> Predefined { get; set; } = default!;
        public DbSet<Project305.Domain.Models.RegisterLog> RegisterLog { get; set; } = default!;

    }
}
