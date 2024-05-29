using System.ComponentModel.DataAnnotations;

namespace Project305.Domain.Models
{
    public class RequestConsult : BaseEntity
    {
        [Required]
        public int PatientId { get; set; }
        [Required]
        public int DoctorId { get; set; }
    }
}
