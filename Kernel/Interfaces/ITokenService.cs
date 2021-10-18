using Kernel.Entities.Identity;

namespace Kernel.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);

    }
}