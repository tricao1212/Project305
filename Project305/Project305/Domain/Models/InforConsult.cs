using System.ComponentModel.DataAnnotations.Schema;

namespace Project305.Domain.Models
{
    public class InforConsult : BaseEntity
    {
        public int DoctorId { get; set; }
        public int PatientId { get; set; }
        public string Appointment { get; set; } = string.Empty;
        public DateTime DateTime { get; set; }
        public double Fee { get; set; } = 0;
    }
}
